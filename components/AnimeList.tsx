import Link from 'next/link';
import React from 'react';
import { Anime } from '../interfaces';

interface Props {
    items: Anime
}

const AnimeList = ({ items }: Props) => {
    return (
        <div>
            <Link href="/anime/[id]" as={`/anime/${items.id}`}>
                {items.name}
            </Link>
        </div>
    );
};

export default AnimeList;