declare namespace JSX {
    interface AmpImg {
        alt?: string;
        src?: string;
        width?: string;
        height?: string;
        layout?: string;
        className?: string;
    }
    interface IntrinsicElements {
        'amp-img': AmpImg;
        'amp-analytics': any;
    }
}
