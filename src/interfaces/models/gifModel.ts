export interface GifModel {
    data: GifData[];
}

export interface GifData {
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    content_url: string;
    source_tld: string;
    source_post_url: string;
    is_sticker: number;
    import_datetime: Date;
    trending_datetime: string;
    images: Images;
    analytics_response_payload: string;
}

export interface Images {
    downsized: The480_WStill;
    downsized_large: The480_WStill;
    downsized_medium: The480_WStill;
    downsized_small: DownsizedSmall;
    downsized_still: The480_WStill;
    fixed_height_small_still: The480_WStill;
    fixed_height_still: The480_WStill;
    fixed_width_small_still: The480_WStill;
    fixed_width_still: The480_WStill;
    original_still: The480_WStill;
    original_mp4: DownsizedSmall;
    preview: DownsizedSmall;
    preview_gif: The480_WStill;
    preview_webp: The480_WStill;
    "480w_still": The480_WStill;
    hd?: DownsizedSmall;
}

export interface The480_WStill {
    height: string;
    width: string;
    size: string;
    url: string;
}

export interface DownsizedSmall {
    height: string;
    width: string;
    mp4_size: string;
    mp4: string;
}
