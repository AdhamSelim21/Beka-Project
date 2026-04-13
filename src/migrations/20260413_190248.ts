import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "acrylics" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "acrylics_id" integer;
  ALTER TABLE "acrylics" ADD CONSTRAINT "acrylics_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "acrylics_image_idx" ON "acrylics" USING btree ("image_id");
  CREATE INDEX "acrylics_updated_at_idx" ON "acrylics" USING btree ("updated_at");
  CREATE INDEX "acrylics_created_at_idx" ON "acrylics" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_acrylics_fk" FOREIGN KEY ("acrylics_id") REFERENCES "public"."acrylics"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_acrylics_id_idx" ON "payload_locked_documents_rels" USING btree ("acrylics_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "acrylics" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "acrylics" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_acrylics_fk";
  
  DROP INDEX "payload_locked_documents_rels_acrylics_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "acrylics_id";`)
}
