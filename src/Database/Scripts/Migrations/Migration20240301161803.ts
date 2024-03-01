import { Migration } from '@mikro-orm/migrations';

export class Migration20240301161803 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "Books" ("Id" uuid not null, "Title" varchar(255) not null, "Author" varchar(255) not null, "ISBN" varchar(255) not null, "Description" text not null, "Publisher" varchar(255) not null, "PublishedDate" timestamptz not null, "PageCount" smallint not null, constraint "Books_pkey" primary key ("Id"));');
  }

}
