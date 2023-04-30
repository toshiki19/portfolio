import {Generated, Kysely} from 'kysely';
import {PlanetScaleDialect} from 'kysely-planetscale';

interface GuestbookTables {
    id: Generated<number>;
    email: string;
    body: string;
    created_by: string;
    updated_at?: string;
}

Interface ViewsTables {
    slug: string;
    count: number;
}

Interface Database {
    guestbook: GuestbookTables;
    views: ViewsTables;
}

export const queryBuilder = new Kysely<Database>({
    dialect: new PlanetScaleDialect({
        url: process.env.DATABASE_URL,
    }),
});