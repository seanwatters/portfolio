import * as wasm from './next_wasm_bg.wasm';

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
  if (idx < 36) return;
  heap[idx] = heap_next;
  heap_next = idx;
}

function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

const cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
    cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];

  heap[idx] = obj;
  return idx;
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

const cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
  ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
  }
  : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
      read: arg.length,
      written: buf.length,
    };
  });

function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === undefined) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr = malloc(buf.length);
    getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr;
  }

  let len = arg.length;
  let ptr = malloc(len);

  const mem = getUint8Memory0();

  let offset = 0;

  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 0x7F) break;
    mem[ptr + offset] = code;
  }

  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3);
    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);

    offset += ret.written;
  }

  WASM_VECTOR_LEN = offset;
  return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
  if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
    cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }
  return cachegetInt32Memory0;
}

function isLikeNone(x) {
  return x === undefined || x === null;
}

function debugString(val) {
  // primitive types
  const type = typeof val;
  if (type == 'number' || type == 'boolean' || val == null) {
    return `${val}`;
  }
  if (type == 'string') {
    return `"${val}"`;
  }
  if (type == 'symbol') {
    const { description } = val;
    if (description == null) {
      return 'Symbol';
    }
    return `Symbol(${description})`;
  }
  if (type == 'function') {
    const { name } = val;
    if (typeof name === 'string' && name.length > 0) {
      return `Function(${name})`;
    }
    return 'Function';
  }
  // objects
  if (Array.isArray(val)) {
    const { length } = val;
    let debug = '[';
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += `, ${debugString(val[i])}`;
    }
    debug += ']';
    return debug;
  }
  // Test for built-in
  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;
  if (builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    // Failed to match the standard '[object ClassName]'
    return toString.call(val);
  }
  if (className == 'Object') {
    // we're a user defined class or Object
    // JSON.stringify avoids problems with cycles, and is generally much
    // easier than looping through ownProperties of `val`.
    try {
      return `Object(${JSON.stringify(val)})`;
    } catch (_) {
      return 'Object';
    }
  }
  // errors
  if (val instanceof Error) {
    return `${val.name}: ${val.message}\n${val.stack}`;
  }
  // TODO we could test for more things here, like `Set`s and `Map`s.
  return className;
}

function makeMutClosure(arg0, arg1, dtor, f) {
  const state = {
    a: arg0, b: arg1, cnt: 1, dtor,
  };
  const real = (...args) => {
    // First up with a closure we increment the internal reference
    // count. This ensures that the Rust closure environment won't
    // be deallocated while we're invoking it.
    state.cnt++;
    const { a } = state;
    state.a = 0;
    try {
      return f(a, state.b, ...args);
    } finally {
      if (--state.cnt === 0) {
        wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);
      } else {
        state.a = a;
      }
    }
  };
  real.original = state;

  return real;
}
function __wbg_adapter_18(arg0, arg1, arg2) {
  wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6429b3e21fb1a47b(arg0, arg1, addHeapObject(arg2));
}

let stack_pointer = 32;

function addBorrowedObject(obj) {
  if (stack_pointer == 1) throw new Error('out of js stack');
  heap[--stack_pointer] = obj;
  return stack_pointer;
}
/**
* @param {any} user
* @param {any} history
*/
export function gen_form(user, history) {
  try {
    wasm.gen_form(addBorrowedObject(user), addBorrowedObject(history));
  } finally {
    heap[stack_pointer++] = undefined;
    heap[stack_pointer++] = undefined;
  }
}

/**
*/
export function use_panic_hook() {
  wasm.use_panic_hook();
}

function handleError(f) {
  return function () {
    try {
      return f.apply(this, arguments);
    } catch (e) {
      wasm.__wbindgen_exn_store(addHeapObject(e));
    }
  };
}
/**
*/
export class User {
  __destroy_into_raw() {
    const { ptr } = this;
    this.ptr = 0;

    return ptr;
  }

  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_user_free(ptr);
  }
}

export const __wbindgen_object_drop_ref = function (arg0) {
  takeObject(arg0);
};

export const __wbindgen_json_parse = function (arg0, arg1) {
  const ret = JSON.parse(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
};

export const __wbindgen_json_serialize = function (arg0, arg1) {
  const obj = getObject(arg1);
  const ret = JSON.stringify(obj === undefined ? null : obj);
  const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbg_new_59cb74e423758ede = function () {
  const ret = new Error();
  return addHeapObject(ret);
};

export const __wbg_stack_558ba5917b466edd = function (arg0, arg1) {
  const ret = getObject(arg1).stack;
  const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbg_error_4bb6c2a97407129a = function (arg0, arg1) {
  try {
    console.error(getStringFromWasm0(arg0, arg1));
  } finally {
    wasm.__wbindgen_free(arg0, arg1);
  }
};

export const __wbg_instanceof_Window_fa4595281eb5ba83 = function (arg0) {
  const ret = getObject(arg0) instanceof Window;
  return ret;
};

export const __wbg_document_d8cce4c1031c64eb = function (arg0) {
  const ret = getObject(arg0).document;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_createElement_695120dd76150487 = handleError((arg0, arg1, arg2) => {
  const ret = getObject(arg0).createElement(getStringFromWasm0(arg1, arg2));
  return addHeapObject(ret);
});

export const __wbg_getElementById_aeb1b7331ed88a97 = function (arg0, arg1, arg2) {
  const ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_newwithform_ca7e27075f69ab71 = handleError((arg0) => {
  const ret = new FormData(getObject(arg0));
  return addHeapObject(ret);
});

export const __wbg_get_bb41136b4cb33a88 = function (arg0, arg1, arg2) {
  const ret = getObject(arg0).get(getStringFromWasm0(arg1, arg2));
  return addHeapObject(ret);
};

export const __wbg_currentTarget_e16158c1028ec07c = function (arg0) {
  const ret = getObject(arg0).currentTarget;
  return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_preventDefault_2a53c6dce5093030 = function (arg0) {
  getObject(arg0).preventDefault();
};

export const __wbg_addEventListener_9b66d58c2a9ba39a = handleError((arg0, arg1, arg2, arg3) => {
  getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
});

export const __wbg_setid_d218dad355f902f5 = function (arg0, arg1, arg2) {
  getObject(arg0).id = getStringFromWasm0(arg1, arg2);
};

export const __wbg_setinnerHTML_a8b2c66f141a2b24 = function (arg0, arg1, arg2) {
  getObject(arg0).innerHTML = getStringFromWasm0(arg1, arg2);
};

export const __wbg_appendChild_9ba4c99688714f13 = handleError((arg0, arg1) => {
  const ret = getObject(arg0).appendChild(getObject(arg1));
  return addHeapObject(ret);
});

export const __wbg_instanceof_HtmlFormElement_431e949977f2cef2 = function (arg0) {
  const ret = getObject(arg0) instanceof HTMLFormElement;
  return ret;
};

export const __wbg_newnoargs_179d393e4626fcf7 = function (arg0, arg1) {
  const ret = new Function(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
};

export const __wbg_call_8487a9f580e47219 = handleError((arg0, arg1) => {
  const ret = getObject(arg0).call(getObject(arg1));
  return addHeapObject(ret);
});

export const __wbg_self_eeabd9085c04fc17 = handleError(() => {
  const ret = self.self;
  return addHeapObject(ret);
});

export const __wbg_window_f110c13310da2c8f = handleError(() => {
  const ret = window.window;
  return addHeapObject(ret);
});

export const __wbg_globalThis_a2669bee93faee43 = handleError(() => {
  const ret = globalThis.globalThis;
  return addHeapObject(ret);
});

export const __wbg_global_a5584d717f4d6761 = handleError(() => {
  const ret = global.global;
  return addHeapObject(ret);
});

export const __wbindgen_is_undefined = function (arg0) {
  const ret = getObject(arg0) === undefined;
  return ret;
};

export const __wbindgen_object_clone_ref = function (arg0) {
  const ret = getObject(arg0);
  return addHeapObject(ret);
};

export const __wbindgen_string_get = function (arg0, arg1) {
  const obj = getObject(arg1);
  const ret = typeof (obj) === 'string' ? obj : undefined;
  const ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbindgen_debug_string = function (arg0, arg1) {
  const ret = debugString(getObject(arg1));
  const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbindgen_throw = function (arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
};

export const __wbindgen_closure_wrapper89 = function (arg0, arg1, arg2) {
  const ret = makeMutClosure(arg0, arg1, 27, __wbg_adapter_18);
  return addHeapObject(ret);
};
