import { EditTagComponent } from './admin/edit-tag/edit-tag.component';
import { PostsComponent } from './admin/posts/posts.component';
import { UsersComponent } from './admin/users/users.component';
import { TagsComponent } from './admin/tags/tags.component';
import { ShowPostComponent } from './admin/show-post/show-post.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';
import { CreateTagComponent } from './admin/create-tag/create-tag.component';
import { CreatePostComponent } from './admin/create-post/create-post.component';
import { CreateCategoryComponent } from './admin/create-category/create-category.component';
import { CommentsComponent } from './admin/comments/comments.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { PostComponent } from "./post/post.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router

const routes: Routes = [
  { component: HomeComponent, path: "" },
  { component: HomeComponent, path: "home" },
  { component: PostComponent, path: "post" },
  { component: LoginComponent, path: "login" },
  { component: RegisterComponent, path: "register" },
  { component: CategoriesComponent, path: "admin/categories" },
  { component: CommentsComponent, path: "admin/comments" },
  { component: CreateCategoryComponent, path: "admin/create-category" },
  { component: CreatePostComponent, path: "admin/create-post" },
  { component: CreateTagComponent, path: "admin/create-tag" },
  { component: EditTagComponent, path: "admin/edit-tag/:id" },
  { component: EditCategoryComponent, path: "admin/edit-category/:id" },
  { component: EditPostComponent, path : "admin/edit-post/:id" },
  { component : ShowPostComponent , path : "admin/show-post/:id" },
  { component : PostsComponent , path : "admin/posts" },
  { component : TagsComponent , path : "admin/tags" },
  {component : UsersComponent , path : "admin/users" },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
