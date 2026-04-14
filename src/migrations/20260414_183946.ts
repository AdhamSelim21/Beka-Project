import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "kids_areas" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "gyms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "kids_areas_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "gyms_id" integer;
  ALTER TABLE "kids_areas" ADD CONSTRAINT "kids_areas_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "gyms" ADD CONSTRAINT "gyms_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "kids_areas_image_idx" ON "kids_areas" USING btree ("image_id");
  CREATE INDEX "kids_areas_updated_at_idx" ON "kids_areas" USING btree ("updated_at");
  CREATE INDEX "kids_areas_created_at_idx" ON "kids_areas" USING btree ("created_at");
  CREATE INDEX "gyms_image_idx" ON "gyms" USING btree ("image_id");
  CREATE INDEX "gyms_updated_at_idx" ON "gyms" USING btree ("updated_at");
  CREATE INDEX "gyms_created_at_idx" ON "gyms" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_kids_areas_fk" FOREIGN KEY ("kids_areas_id") REFERENCES "public"."kids_areas"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_gyms_fk" FOREIGN KEY ("gyms_id") REFERENCES "public"."gyms"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_kids_areas_id_idx" ON "payload_locked_documents_rels" USING btree ("kids_areas_id");
  CREATE INDEX "payload_locked_documents_rels_gyms_id_idx" ON "payload_locked_documents_rels" USING btree ("gyms_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "kids_areas" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "gyms" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "kids_areas" CASCADE;
  DROP TABLE "gyms" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_kids_areas_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_gyms_fk";
  
  DROP INDEX "payload_locked_documents_rels_kids_areas_id_idx";
  DROP INDEX "payload_locked_documents_rels_gyms_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "kids_areas_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "gyms_id";`)
}
