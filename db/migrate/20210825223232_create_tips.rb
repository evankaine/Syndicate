class CreateTips < ActiveRecord::Migration[6.1]
  def change
    create_table :tips do |t|
      t.references :user, null: false, foreign_key: true
      t.references :legend, null: false, foreign_key: true
      t.text :tip

      t.timestamps
    end
  end
end
