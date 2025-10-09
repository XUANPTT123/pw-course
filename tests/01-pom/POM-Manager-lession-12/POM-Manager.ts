import { Page } from "@playwright/test";
import { MaterialBasePage } from "../POM-Manager-lession-12/MaterialBasePage";
import { RegisterPage } from "./RegisterPage";
import { ProductPage } from "./ProductPage";
import { TodoPage } from "./TodoPage";
import { PersionalNotes } from "./PersionalNotes";

export class PomManager {
    page;

    constructor(page: Page) {
        this.page = page;
    }

    getNavigate() {
        return new MaterialBasePage(this.page);
    }

    getRegisterPage() {
        return new RegisterPage(this.page);
    }

    getProductPage() {
        return new ProductPage(this.page);
    }

    getTodoPage() {
        return new TodoPage(this.page);
    }

    getPersionalNote() {
        return new PersionalNotes(this.page);
    }
}