import { PortableTextBlock } from "sanity";

export type Page = {
_id: string;
_createAd: Date;
title: string;
slug: string;
content: PortableTextBlock[]
}