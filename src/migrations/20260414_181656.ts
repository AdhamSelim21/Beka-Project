import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "artificial_grass" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "padpols" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "artificial_grass_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "padpols_id" integer;
  ALTER TABLE "artificial_grass" ADD CONSTRAINT "artificial_grass_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "padpols" ADD CONSTRAINT "padpols_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "artificial_grass_image_idx" ON "artificial_grass" USING btree ("image_id");
  CREATE INDEX "artificial_grass_updated_at_idx" ON "artificial_grass" USING btree ("updated_at");
  CREATE INDEX "artificial_grass_created_at_idx" ON "artificial_grass" USING btree ("created_at");
  CREATE INDEX "padpols_image_idx" ON "padpols" USING btree ("image_id");
  CREATE INDEX "padpols_updated_at_idx" ON "padpols" USING btree ("updated_at");
  CREATE INDEX "padpols_created_at_idx" ON "padpols" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_artificial_grass_fk" FOREIGN KEY ("artificial_grass_id") REFERENCES "public"."artificial_grass"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_padpols_fk" FOREIGN KEY ("padpols_id") REFERENCES "public"."padpols"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_artificial_grass_id_idx" ON "payload_locked_documents_rels" USING btree ("artificial_grass_id");
  CREATE INDEX "payload_locked_documents_rels_padpols_id_idx" ON "payload_locked_documents_rels" USING btree ("padpols_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "artificial_grass" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "padpols" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "artificial_grass" CASCADE;
  DROP TABLE "padpols" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_artificial_grass_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_padpols_fk";
  
  DROP INDEX "payload_locked_documents_rels_artificial_grass_id_idx";
  DROP INDEX "payload_locked_documents_rels_padpols_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "artificial_grass_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "padpols_id";`)
}
