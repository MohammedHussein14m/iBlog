import { UsersService } from './services/users.service';
import { TagsService } from './services/tags.service';
import { PostsService } from './services/posts.service';
import { CommentsService } from './services/comments.service';
import { CategoryService } from './services/category.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { CardComponent } from './shared/card/card.component';
import { CommentsComponent } from './admin/comments/comments.component';
import { CreateCategoryComponent } from './admin/create-category/create-category.component';
import { CreatePostComponent } from './admin/create-post/create-post.component';
import { CreateTagComponent } from './admin/create-tag/create-tag.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { PostsComponent } from './admin/posts/posts.component';
import { ShowPostComponent } from './admin/show-post/show-post.component';
import { TagsComponent } from './admin/tags/tags.component';
import { UsersComponent } from './admin/users/users.component';
import { EditTagComponent } from './admin/edit-tag/edit-tag.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PostComponent,
    RegisterComponent,
    CategoriesComponent,
    NavBarComponent,
    CardComponent,
    CommentsComponent,
    CreateCategoryComponent,
    CreatePostComponent,
    CreateTagComponent,
    EditCategoryComponent,
    EditPostComponent,
    PostsComponent,
    ShowPostComponent,
    TagsComponent,
    UsersComponent,
    EditTagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [
    CategoryService,
    CommentsService,
    PostsService,
    TagsService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
