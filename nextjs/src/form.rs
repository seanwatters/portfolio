use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;

#[wasm_bindgen]
#[derive(Serialize, Deserialize)]
struct User {
    name: String,
    age: u32,
    permissions: String,
}

#[wasm_bindgen]
pub fn gen_form(user: &JsValue, history: &JsValue) {
    let user: User = user.into_serde().unwrap();
    let history: Vec<User> = history.into_serde().unwrap();

    let window = web_sys::window().expect("no global `window` exists");
    let document = window.document().expect("should have a document on window");

    let form_node: web_sys::Element = document
        .create_element("form")
        .expect("DOM element to have been created");

    form_node.set_id("form-example");

    let template: &str = &gen_template(&user, &history);
    form_node.set_inner_html(template);

    let form_node = add_submit_handler(form_node, history);

    let root = document
        .get_element_by_id("page-root")
        .expect("page root to exist");
    root.append_child(&form_node).expect("root appended");
}

fn add_submit_handler(form_node: web_sys::Element, mut history: Vec<User>) -> web_sys::Element {
    let closure = Closure::wrap(Box::new(move |event: web_sys::Event| {
        event.prevent_default();
        let mut name: String = String::from("");
        let mut age: u32 = 0;
        let mut permissions: String = String::from("");

        let target = event.current_target().unwrap();
        match target.dyn_ref::<web_sys::HtmlFormElement>() {
            None => {}
            Some(form) => {
                let data = web_sys::FormData::new_with_form(form).unwrap();

                name = data.get("name").as_string().unwrap();
                age = data.get("age").as_string().unwrap().parse().unwrap();
                permissions = data.get("permissions").as_string().unwrap();
            }
        }

        history.push(User {
            name: name.clone(),
            age,
            permissions: permissions.clone(),
        });

        let window = web_sys::window().expect("no global `window` exists");
        let document = window.document().expect("should have a document on window");

        let page_root = document
            .get_element_by_id("page-root")
            .expect("page root to exist");
        page_root.set_inner_html("");

        let user = User {
            name,
            age,
            permissions,
        };

        let js_val_user = &JsValue::from_serde(&user).unwrap();
        let js_val_history = &JsValue::from_serde(&history).unwrap();
        gen_form(js_val_user, js_val_history);
    }) as Box<dyn FnMut(_)>);

    let cb = closure.as_ref().unchecked_ref();

    form_node
        .add_event_listener_with_callback("submit", cb)
        .expect("event listener to be added");
    closure.forget();
    form_node
}

fn gen_template(
    User {
        name,
        age,
        permissions,
    }: &User,
    history: &[User],
) -> String {
    let history_template: String = history.iter().fold(String::new(), |template, user| {
        format!(
            "
                {}
                <p>{}</p>
                <div class=\"created-user\">Age: {}</div>
                <div class=\"created-user\">Permissions: {}</div>
            ",
            template, user.name, user.age, user.permissions
        )
    });

    let user_checked = if permissions.eq("user") {
        "checked"
    } else {
        ""
    };
    let admin_checked = if permissions.eq("admin") {
        "checked"
    } else {
        ""
    };

    format!(
        "
            <h1>Create User!</h1>
            <label for=\"name\">Name</label>
            <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Name\" value=\"{}\">
            <label for=\"age\">Age</label>
            <input type=\"number\" id=\"age\" name=\"age\" value=\"{}\">
            <p>Permissions</p>
            <label for=\"user\">
                <input type=\"radio\" id=\"user\" name=\"permissions\" value=\"user\" {}>
                User
            </label>
            <label for=\"admin\">
                <input type=\"radio\" id=\"admin\" name=\"permissions\" value=\"admin\" {}>
                Admin
            </label>
            <input id=\"submit\" type=\"submit\" value=\"Submit\">
            <section>{}</section>
        ",
        name, age, user_checked, admin_checked, history_template,
    )
}
