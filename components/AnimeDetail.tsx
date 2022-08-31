import Link from 'next/link';
import React from 'react';
import { Anime } from '../interfaces';

interface Props {
    item: Anime
}

const AnimeDetail = ({item: anime}: Props) => {
    return (
        <div className="anime__detail">
            <div className="grid wide">
                <Link href="/anime/[id]" as={`/anime/${anime.id}`}>
                    <a>
                        {anime.id}: {anime.name}
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default AnimeDetail;