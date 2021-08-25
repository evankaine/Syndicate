class CreateLegends < ActiveRecord::Migration[6.1]
  def change
    create_table :legends do |t|
      t.string :name
      t.string :legend_image_url
      t.string :passive_name
      t.string :passive_image_url
      t.string :tactical_name
      t.string :tactical_image_url
      t.string :ultimate_name
      t.string :ultimate_image_url
      t.text :lore

      t.timestamps
    end
  end
end
