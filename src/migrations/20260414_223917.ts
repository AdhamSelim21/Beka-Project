import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "land_scaps" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "land_scaps_id" integer;
  ALTER TABLE "land_scaps" ADD CONSTRAINT "land_scaps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "land_scaps_image_idx" ON "land_scaps" USING btree ("image_id");
  CREATE INDEX "land_scaps_updated_at_idx" ON "land_scaps" USING btree ("updated_at");
  CREATE INDEX "land_scaps_created_at_idx" ON "land_scaps" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_land_scaps_fk" FOREIGN KEY ("land_scaps_id") REFERENCES "public"."land_scaps"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_land_scaps_id_idx" ON "payload_locked_documents_rels" USING btree ("land_scaps_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "land_scaps" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "land_scaps" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_land_scaps_fk";
  
  DROP INDEX "payload_locked_documents_rels_land_scaps_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "land_scaps_id";`)
}
