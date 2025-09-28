import {expect, test} from '@playwright/test';
import { PersionalNotes } from '../01-pom/PersionalNotes';
const keyWord = 'công nghệ';

test ('PersionalNote', async({page}) => {
    const persionalNote = new PersionalNotes(page);

    await test.step('Add persional notes', async() => {
        await persionalNote.AddPersionalNotes();
    })

    await test.step('Search', async() => {
        await persionalNote.SearchNote(keyWord);
    })

    await test.step('Verify data hiển thị đúng keyword', async() => {
        await persionalNote.VerifyDataContainsKeyWord(keyWord);
    })
})