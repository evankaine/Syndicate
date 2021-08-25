# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_25_223232) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "legends", force: :cascade do |t|
    t.string "name"
    t.string "legend_image_url"
    t.string "passive_name"
    t.string "passive_image_url"
    t.string "tactical_name"
    t.string "tactical_image_url"
    t.string "ultimate_name"
    t.string "ultimate_image_url"
    t.text "lore"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tips", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "legend_id", null: false
    t.text "tip"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["legend_id"], name: "index_tips_on_legend_id"
    t.index ["user_id"], name: "index_tips_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "tips", "legends"
  add_foreign_key "tips", "users"
end
