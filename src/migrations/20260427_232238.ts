import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en-US', 'ar-EG', 'fr', 'tr');
  CREATE TABLE "about_description" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  ALTER TABLE "products" ADD COLUMN "hide_image_text" boolean DEFAULT false;
  ALTER TABLE "portfolios" ADD COLUMN "hide_image_text" boolean DEFAULT false;
  ALTER TABLE "about" ADD COLUMN "hide_image_text" boolean DEFAULT false;
  ALTER TABLE "about_description" ADD CONSTRAINT "about_description_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "about_description_order_idx" ON "about_description" USING btree ("_order");
  CREATE INDEX "about_description_parent_id_idx" ON "about_description" USING btree ("_parent_id");
  ALTER TABLE "about" DROP COLUMN "description";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "about_description" CASCADE;
  ALTER TABLE "about" ADD COLUMN "description" varchar NOT NULL;
  ALTER TABLE "products" DROP COLUMN "hide_image_text";
  ALTER TABLE "portfolios" DROP COLUMN "hide_image_text";
  ALTER TABLE "about" DROP COLUMN "hide_image_text";
  DROP TYPE "public"."_locales";`)
}
