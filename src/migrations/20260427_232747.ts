import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "products" DROP COLUMN "hide_image_text";
  ALTER TABLE "portfolios" DROP COLUMN "hide_image_text";
  ALTER TABLE "about" DROP COLUMN "hide_image_text";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "products" ADD COLUMN "hide_image_text" boolean DEFAULT false;
  ALTER TABLE "portfolios" ADD COLUMN "hide_image_text" boolean DEFAULT false;
  ALTER TABLE "about" ADD COLUMN "hide_image_text" boolean DEFAULT false;`)
}
