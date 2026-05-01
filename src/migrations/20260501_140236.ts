import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "products_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
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
  
  CREATE TABLE "services_sections_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "services_locales" (
  	"title" varchar NOT NULL,
  	"image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "about_locales" (
  	"description" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "products" DROP CONSTRAINT "products_image_id_media_id_fk";
  
  ALTER TABLE "portfolios" DROP CONSTRAINT "portfolios_image_id_media_id_fk";
  
  ALTER TABLE "services_sections_gallery" DROP CONSTRAINT "services_sections_gallery_image_id_media_id_fk";
  
  ALTER TABLE "services" DROP CONSTRAINT "services_image_id_media_id_fk";
  
  ALTER TABLE "about" DROP CONSTRAINT "about_image_id_media_id_fk";
  
  ALTER TABLE "products_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "portfolios_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "services_sections_gallery_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "services_sections_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "services_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "about_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  DROP TYPE "public"."_locales";
  CREATE TYPE "public"."_locales" AS ENUM('en', 'ar', 'fr', 'tr');
  ALTER TABLE "products_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "portfolios_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "services_sections_gallery_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "services_sections_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "services_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "about_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  DROP INDEX "products_image_idx";
  DROP INDEX "portfolios_image_idx";
  DROP INDEX "services_sections_gallery_image_idx";
  DROP INDEX "services_image_idx";
  DROP INDEX "about_image_idx";
  ALTER TABLE "products_locales" ADD CONSTRAINT "products_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "products_locales" ADD CONSTRAINT "products_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "portfolios_locales" ADD CONSTRAINT "portfolios_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "portfolios_locales" ADD CONSTRAINT "portfolios_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolios"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_sections_gallery_locales" ADD CONSTRAINT "services_sections_gallery_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_sections_gallery_locales" ADD CONSTRAINT "services_sections_gallery_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_sections_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_sections_locales" ADD CONSTRAINT "services_sections_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_locales" ADD CONSTRAINT "services_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_locales" ADD CONSTRAINT "services_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_locales" ADD CONSTRAINT "about_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_locales" ADD CONSTRAINT "about_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "products_image_idx" ON "products_locales" USING btree ("image_id","_locale");
  CREATE UNIQUE INDEX "products_locales_locale_parent_id_unique" ON "products_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "portfolios_image_idx" ON "portfolios_locales" USING btree ("image_id","_locale");
  CREATE UNIQUE INDEX "portfolios_locales_locale_parent_id_unique" ON "portfolios_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "services_sections_gallery_image_idx" ON "services_sections_gallery_locales" USING btree ("image_id","_locale");
  CREATE UNIQUE INDEX "services_sections_gallery_locales_locale_parent_id_unique" ON "services_sections_gallery_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "services_sections_locales_locale_parent_id_unique" ON "services_sections_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "services_image_idx" ON "services_locales" USING btree ("image_id","_locale");
  CREATE UNIQUE INDEX "services_locales_locale_parent_id_unique" ON "services_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "about_image_idx" ON "about_locales" USING btree ("image_id","_locale");
  CREATE UNIQUE INDEX "about_locales_locale_parent_id_unique" ON "about_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "products" DROP COLUMN "title";
  ALTER TABLE "products" DROP COLUMN "description";
  ALTER TABLE "products" DROP COLUMN "image_id";
  ALTER TABLE "portfolios" DROP COLUMN "description";
  ALTER TABLE "portfolios" DROP COLUMN "image_id";
  ALTER TABLE "services_sections_gallery" DROP COLUMN "image_id";
  ALTER TABLE "services_sections" DROP COLUMN "title";
  ALTER TABLE "services" DROP COLUMN "title";
  ALTER TABLE "services" DROP COLUMN "image_id";
  ALTER TABLE "about" DROP COLUMN "description";
  ALTER TABLE "about" DROP COLUMN "image_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "products_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "portfolios_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_sections_gallery_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_sections_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "about_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "products_locales" CASCADE;
  DROP TABLE "portfolios_locales" CASCADE;
  DROP TABLE "services_sections_gallery_locales" CASCADE;
  DROP TABLE "services_sections_locales" CASCADE;
  DROP TABLE "services_locales" CASCADE;
  DROP TABLE "about_locales" CASCADE;
  DROP TYPE "public"."_locales";
  CREATE TYPE "public"."_locales" AS ENUM('en-US', 'ar-EG', 'fr', 'tr');
  ALTER TABLE "products" ADD COLUMN "title" varchar NOT NULL;
  ALTER TABLE "products" ADD COLUMN "description" varchar;
  ALTER TABLE "products" ADD COLUMN "image_id" integer;
  ALTER TABLE "portfolios" ADD COLUMN "description" varchar NOT NULL;
  ALTER TABLE "portfolios" ADD COLUMN "image_id" integer;
  ALTER TABLE "services_sections_gallery" ADD COLUMN "image_id" integer NOT NULL;
  ALTER TABLE "services_sections" ADD COLUMN "title" varchar NOT NULL;
  ALTER TABLE "services" ADD COLUMN "title" varchar NOT NULL;
  ALTER TABLE "services" ADD COLUMN "image_id" integer;
  ALTER TABLE "about" ADD COLUMN "description" varchar NOT NULL;
  ALTER TABLE "about" ADD COLUMN "image_id" integer NOT NULL;
  ALTER TABLE "products" ADD CONSTRAINT "products_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "portfolios" ADD CONSTRAINT "portfolios_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_sections_gallery" ADD CONSTRAINT "services_sections_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about" ADD CONSTRAINT "about_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "products_image_idx" ON "products" USING btree ("image_id");
  CREATE INDEX "portfolios_image_idx" ON "portfolios" USING btree ("image_id");
  CREATE INDEX "services_sections_gallery_image_idx" ON "services_sections_gallery" USING btree ("image_id");
  CREATE INDEX "services_image_idx" ON "services" USING btree ("image_id");
  CREATE INDEX "about_image_idx" ON "about" USING btree ("image_id");`)
}
