CREATE TABLE "users"
(
	"user_id" serial,
	"user_name" varchar(20),
	"user_email" varchar(30),
	"user_image" varchar(30),
	CONSTRAINT "users_pk" PRIMARY KEY ("user_id")
)
WITH (
  OIDS=FALSE
);



CREATE TABLE "servers"
(
	"server_id" serial,
	"server_name" varchar(40),
	"server_image" varchar(40),
	"user_id" integer,
	CONSTRAINT "servers_pk" PRIMARY KEY ("server_id")
)
WITH (
  OIDS=FALSE
);



CREATE TABLE "socket_messages"
(
	"socket_message_id" serial,
	"room_id" integer,
	"user_id" integer,
	"message" varchar,
	CONSTRAINT "socket_messages_pk" PRIMARY KEY ("socket_message_id")
)
WITH (
  OIDS=FALSE
);



CREATE TABLE "socket_rooms"
(
	"socket_room_id" serial,
	"room_name" varchar UNIQUE,
	"server_id" integer,
	CONSTRAINT "socket_rooms_pk" PRIMARY KEY ("socket_room_id","server_id")
)
WITH (
  OIDS=FALSE
);


CREATE TABLE "news_feed"
(
	"news_posts_id" serial PRIMARY KEY,
	"server_id" integer,
	"news_post_title" varchar,
	"news_post_image" varchar,
	"news_post_date" varchar
);



CREATE TABLE "server_users_junction"
(
	"server_junction_id" serial,
	"user_id" integer,
	"server_id" integer,
	CONSTRAINT "server_users_junction_pk" PRIMARY KEY ("server_junction_id")
)
WITH (
  OIDS=FALSE
);



CREATE TABLE "user_friend_junction"
(
	"user_friend_junction" serial,
	"user_id" integer,
	"friend_id" integer,
	"accepted" BOOLEAN,
	CONSTRAINT "user_friend_junction_pk" PRIMARY KEY ("user_friend_junction")
)
WITH (
  OIDS=FALSE
);




ALTER TABLE "servers" ADD CONSTRAINT "servers_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");

ALTER TABLE "socket_messages" ADD CONSTRAINT "socket_messages_fk0" FOREIGN KEY ("room_id") REFERENCES "socket_rooms"("socket_room_id");
ALTER TABLE "socket_messages" ADD CONSTRAINT "socket_messages_fk1" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");

ALTER TABLE "socket_rooms" ADD CONSTRAINT "socket_rooms_fk0" FOREIGN KEY ("server_id") REFERENCES "servers"("server_id");

ALTER TABLE "news_feed" ADD CONSTRAINT "news_feed_fk0" FOREIGN KEY ("server_id") REFERENCES "servers"("server_id");

ALTER TABLE "server_users_junction" ADD CONSTRAINT "server_users_junction_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");
ALTER TABLE "server_users_junction" ADD CONSTRAINT "server_users_junction_fk1" FOREIGN KEY ("server_id") REFERENCES "servers"("server_id");

ALTER TABLE "user_friend_junction" ADD CONSTRAINT "user_friend_junction_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");
ALTER TABLE "user_friend_junction" ADD CONSTRAINT "user_friend_junction_fk1" FOREIGN KEY ("freind_id") REFERENCES "users"("user_id");
