export interface FixedHeight {
    url: string;
}

export interface Images {
    original: FixedHeight;
}

export interface GiffItemProps {
    url: string;
    title: string;
    images: Images;
}