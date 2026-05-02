import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "media_locales" (
  	"alt" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "portfolios_projectname_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "portfolios_projectname_list_items_locales" (
  	"content" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "portfolios_projectname" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "portfolios_projectname_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "footer_whatsapp_locales" (
  	"number" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  ALTER TABLE "portfolios_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_sections_gallery_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "portfolios_locales" CASCADE;
  DROP TABLE "services_sections_gallery_locales" CASCADE;
  ALTER TABLE "products_locales" DROP CONSTRAINT "products_locales_image_id_media_id_fk";
  
  ALTER TABLE "services_locales" DROP CONSTRAINT "services_locales_image_id_media_id_fk";
  
  ALTER TABLE "about_locales" DROP CONSTRAINT "about_locales_image_id_media_id_fk";
  
  DROP INDEX "products_image_idx";
  DROP INDEX "services_image_idx";
  DROP INDEX "about_image_idx";
  ALTER TABLE "products" ADD COLUMN "image_id" integer;
  ALTER TABLE "portfolios" ADD COLUMN "image_id" integer;
  ALTER TABLE "services_sections_gallery" ADD COLUMN "image_id" integer NOT NULL;
  ALTER TABLE "services" ADD COLUMN "image_id" integer;
  ALTER TABLE "about" ADD COLUMN "image_id" integer NOT NULL;
  ALTER TABLE "media_locales" ADD CONSTRAINT "media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "portfolios_projectname_list_items" ADD CONSTRAINT "portfolios_projectname_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolios_projectname"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "portfolios_projectname_list_items_locales" ADD CONSTRAINT "portfolios_projectname_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolios_projectname_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "portfolios_projectname" ADD CONSTRAINT "portfolios_projectname_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolios"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "portfolios_projectname_locales" ADD CONSTRAINT "portfolios_projectname_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolios_projectname"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_whatsapp_locales" ADD CONSTRAINT "footer_whatsapp_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_whatsapp"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "media_locales_locale_parent_id_unique" ON "media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "portfolios_projectname_list_items_order_idx" ON "portfolios_projectname_list_items" USING btree ("_order");
  CREATE INDEX "portfolios_projectname_list_items_parent_id_idx" ON "portfolios_projectname_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "portfolios_projectname_list_items_locales_locale_parent_id_u" ON "portfolios_projectname_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "portfolios_projectname_order_idx" ON "portfolios_projectname" USING btree ("_order");
  CREATE INDEX "portfolios_projectname_parent_id_idx" ON "portfolios_projectname" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "portfolios_projectname_locales_locale_parent_id_unique" ON "portfolios_projectname_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "footer_whatsapp_locales_locale_parent_id_unique" ON "footer_whatsapp_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "products" ADD CONSTRAINT "products_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "portfolios" ADD CONSTRAINT "portfolios_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_sections_gallery" ADD CONSTRAINT "services_sections_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about" ADD CONSTRAINT "about_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "products_image_idx" ON "products" USING btree ("image_id");
  CREATE INDEX "portfolios_image_idx" ON "portfolios" USING btree ("image_id");
  CREATE INDEX "services_sections_gallery_image_idx" ON "services_sections_gallery" USING btree ("image_id");
  CREATE INDEX "services_image_idx" ON "services" USING btree ("image_id");
  CREATE INDEX "about_image_idx" ON "about" USING btree ("image_id");
  ALTER TABLE "media" DROP COLUMN "alt";
  ALTER TABLE "products_locales" DROP COLUMN "image_id";
  ALTER TABLE "services_locales" DROP COLUMN "image_id";
  ALTER TABLE "about_locales" DROP COLUMN "image_id";
  ALTER TABLE "footer_whatsapp" DROP COLUMN "number";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "portfolios_locales" (
  	"description" varchar NOT NULL,
  	"image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "services_sections_gallery_locales" (
  	"image_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  ALTER TABLE "media_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "portfolios_projectname_list_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "portfolios_projectname_list_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "portfolios_projectname" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "portfolios_projectname_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_whatsapp_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "media_locales" CASCADE;
  DROP TABLE "portfolios_projectname_list_items" CASCADE;
  DROP TABLE "portfolios_projectname_list_items_locales" CASCADE;
  DROP TABLE "portfolios_projectname" CASCADE;
  DROP TABLE "portfolios_projectname_locales" CASCADE;
  DROP TABLE "footer_whatsapp_locales" CASCADE;
  ALTER TABLE "products" DROP CONSTRAINT "products_image_id_media_id_fk";
  
  ALTER TABLE "portfolios" DROP CONSTRAINT "portfolios_image_id_media_id_fk";
  
  ALTER TABLE "services_sections_gallery" DROP CONSTRAINT "services_sections_gallery_image_id_media_id_fk";
  
  ALTER TABLE "services" DROP CONSTRAINT "services_image_id_media_id_fk";
  
  ALTER TABLE "about" DROP CONSTRAINT "about_image_id_media_id_fk";
  
  DROP INDEX "products_image_idx";
  DROP INDEX "portfolios_image_idx";
  DROP INDEX "services_sections_gallery_image_idx";
  DROP INDEX "services_image_idx";
  DROP INDEX "about_image_idx";
  ALTER TABLE "media" ADD COLUMN "alt" varchar NOT NULL;
  ALTER TABLE "products_locales" ADD COLUMN "image_id" integer;
  ALTER TABLE "services_locales" ADD COLUMN "image_id" integer;
  ALTER TABLE "about_locales" ADD COLUMN "image_id" integer NOT NULL;
  ALTER TABLE "footer_whatsapp" ADD COLUMN "number" varchar NOT NULL;
  ALTER TABLE "portfolios_locales" ADD CONSTRAINT "portfolios_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "portfolios_locales" ADD CONSTRAINT "portfolios_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolios"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_sections_gallery_locales" ADD CONSTRAINT "services_sections_gallery_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_sections_gallery_locales" ADD CONSTRAINT "services_sections_gallery_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_sections_gallery"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "portfolios_image_idx" ON "portfolios_locales" USING btree ("image_id","_locale");
  CREATE UNIQUE INDEX "portfolios_locales_locale_parent_id_unique" ON "portfolios_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "services_sections_gallery_image_idx" ON "services_sections_gallery_locales" USING btree ("image_id","_locale");
  CREATE UNIQUE INDEX "services_sections_gallery_locales_locale_parent_id_unique" ON "services_sections_gallery_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "products_locales" ADD CONSTRAINT "products_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_locales" ADD CONSTRAINT "services_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_locales" ADD CONSTRAINT "about_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "products_image_idx" ON "products_locales" USING btree ("image_id","_locale");
  CREATE INDEX "services_image_idx" ON "services_locales" USING btree ("image_id","_locale");
  CREATE INDEX "about_image_idx" ON "about_locales" USING btree ("image_id","_locale");
  ALTER TABLE "products" DROP COLUMN "image_id";
  ALTER TABLE "portfolios" DROP COLUMN "image_id";
  ALTER TABLE "services_sections_gallery" DROP COLUMN "image_id";
  ALTER TABLE "services" DROP COLUMN "image_id";
  ALTER TABLE "about" DROP COLUMN "image_id";`)
}
