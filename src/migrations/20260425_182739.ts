import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "footer_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_address" varchar NOT NULL
  );
  
  CREATE TABLE "footer_whatsapp" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar NOT NULL
  );
  
  CREATE TABLE "footer_social_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"instagram" varchar NOT NULL,
  	"facebook" varchar NOT NULL,
  	"tiktok" varchar NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "footer_id" integer;
  ALTER TABLE "footer_email" ADD CONSTRAINT "footer_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_whatsapp" ADD CONSTRAINT "footer_whatsapp_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_social_media" ADD CONSTRAINT "footer_social_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "footer_email_order_idx" ON "footer_email" USING btree ("_order");
  CREATE INDEX "footer_email_parent_id_idx" ON "footer_email" USING btree ("_parent_id");
  CREATE INDEX "footer_whatsapp_order_idx" ON "footer_whatsapp" USING btree ("_order");
  CREATE INDEX "footer_whatsapp_parent_id_idx" ON "footer_whatsapp" USING btree ("_parent_id");
  CREATE INDEX "footer_social_media_order_idx" ON "footer_social_media" USING btree ("_order");
  CREATE INDEX "footer_social_media_parent_id_idx" ON "footer_social_media" USING btree ("_parent_id");
  CREATE INDEX "footer_updated_at_idx" ON "footer" USING btree ("updated_at");
  CREATE INDEX "footer_created_at_idx" ON "footer" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_footer_fk" FOREIGN KEY ("footer_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_footer_id_idx" ON "payload_locked_documents_rels" USING btree ("footer_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "footer_email" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_whatsapp" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_social_media" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "footer_email" CASCADE;
  DROP TABLE "footer_whatsapp" CASCADE;
  DROP TABLE "footer_social_media" CASCADE;
  DROP TABLE "footer" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_footer_fk";
  
  DROP INDEX "payload_locked_documents_rels_footer_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "footer_id";`)
}
