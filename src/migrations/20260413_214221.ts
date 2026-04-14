import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "trtans" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "trtans_id" integer;
  ALTER TABLE "trtans" ADD CONSTRAINT "trtans_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "trtans_image_idx" ON "trtans" USING btree ("image_id");
  CREATE INDEX "trtans_updated_at_idx" ON "trtans" USING btree ("updated_at");
  CREATE INDEX "trtans_created_at_idx" ON "trtans" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_trtans_fk" FOREIGN KEY ("trtans_id") REFERENCES "public"."trtans"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_trtans_id_idx" ON "payload_locked_documents_rels" USING btree ("trtans_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "trtans" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "trtans" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_trtans_fk";
  
  DROP INDEX "payload_locked_documents_rels_trtans_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "trtans_id";`)
}
