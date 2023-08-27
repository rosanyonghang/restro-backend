import { RecipeItem } from 'src/recipe-item/entities/recipe-item.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { Item } from '../../item/entities/item.entity';

@Entity()
export class Recipe extends CoreEntity {
  @Column()
  title: string;

  @OneToMany(() => RecipeItem, (recipeItem) => recipeItem.recipe)
  items: RecipeItem[];
}
