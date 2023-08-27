import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { Item } from '../../item/entities/item.entity';
import { Recipe } from '../../recipe/entities/recipe.entity';

@Entity()
export class RecipeItem extends CoreEntity {
  @OneToOne(() => Item)
  item: Item;

  @Column()
  quantity: number;

  @ManyToOne(() => Recipe, (recipe) => recipe.items)
  recipe: Recipe;
}
