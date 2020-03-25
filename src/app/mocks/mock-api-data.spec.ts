import { LoginModel } from '../models/LoginModel';
import { StoresResponseModel } from '../models/StoresResponseModel';
import { ArticlesResponseModel } from '../models/ArticlesResponseModel';
import { StoreRequest } from '../models/StoreRequest';
import { ArticleRequest } from '../models/ArticleRequest';

export const mockSet = {
    getStoreRequestAdd: new StoreRequest({
        name: 'name99',
        address: 'address99'
    }),
    getStoreRequestEdit: new StoreRequest({
        id: 1,
        name: 'name99',
        address: 'address99'
    }),
    getArticlesRequestAdd: new ArticleRequest({
        description: 'desc1',
        name: 'name1',
        price: 1,
        total_in_shelf: 10,
        total_in_vault: 100,
        store_Id: 1,
    }),
    getArticlesRequestEdit: new ArticleRequest({
        id: 1,
        description: 'desc1',
        name: 'name1',
        price: 1,
        total_in_shelf: 10,
        total_in_vault: 100,
    }),
    getStoresListResponse: new StoresResponseModel({
        stores: [{
            id: 1,
            name: 'name1',
            address: 'address1'
        },
        {
            id: 2,
            name: 'name2',
            address: 'address2'
        },
        {
            id: 3,
            name: 'name3',
            address: 'address3'
        }],
        total_elements: 3,
        success: true
    }),
    getArticlesListResponse: new ArticlesResponseModel({
        articles: [{
            id: 1,
            description: 'desc1',
            name: 'name1',
            price: 1,
            total_in_shelf: 10,
            total_in_vault: 100,
            store_Id: 1,
        },
        {
            id: 2,
            description: 'desc2',
            name: 'name2',
            price: 2,
            total_in_shelf: 20,
            total_in_vault: 200,
            store_Id: 2,
        },
        {
            id: 3,
            description: 'desc3',
            name: 'name3',
            price: 3,
            total_in_shelf: 30,
            total_in_vault: 300,
            store_Id: 3,
        }],
        success: true,
        total_elements: 3
    }),
    getArticleByStoreResponse: new ArticlesResponseModel({
        articles: [{
            id: 1,
            description: 'desc1',
            name: 'name1',
            price: 1,
            total_in_shelf: 10,
            total_in_vault: 100,
            store_Id: 1,
        },
        {
            id: 2,
            description: 'desc2',
            name: 'name2',
            price: 2,
            total_in_shelf: 20,
            total_in_vault: 200,
            store_Id: 2,
        },
        {
            id: 3,
            description: 'desc3',
            name: 'name3',
            price: 3,
            total_in_shelf: 30,
            total_in_vault: 300,
            store_Id: 3,
        }],
        success: true,
        total_elements: 3
    }),
    getEditStoreResponse: new StoresResponseModel({
        stores: [{
            id: 1,
            name: 'name1',
            address: 'address1'
        },
        {
            id: 2,
            name: 'name2',
            address: 'address2'
        },
        {
            id: 3,
            name: 'name3',
            address: 'address3'
        }],
        total_elements: 3,
        success: true
    }),
    getEditArticleResponse: new ArticlesResponseModel({
        articles: [{
            id: 1,
            description: 'desc1',
            name: 'name1',
            price: 1,
            total_in_shelf: 10,
            total_in_vault: 100,
            store_Id: 1,
        }],
        success: true,
        total_elements: 3
    }),
    getAddStoreResponse: new StoresResponseModel({
        stores: [{
            id: 3,
            name: 'name3',
            address: 'address3'
        }],
        total_elements: 1,
        success: true
    }),
    getAddArticleResponse: new ArticlesResponseModel({
        articles: [
            {
                id: 1,
                description: 'modi',
                name: 'ficar',
                price: 1,
                total_In_Shelf: 11,
                total_In_Vault: 22,
                store_Id: 1
            },
            {
                id: 2,
                description: 'desc10',
                name: 'name10',
                price: 10,
                total_In_Shelf: 100,
                total_In_Vault: 1000,
                store_Id: 1
            },
            {
                id: 3,
                description: 'desc101',
                name: 'name101',
                price: 101,
                total_In_Shelf: 1010,
                total_In_Vault: 10101,
                store_Id: 1
            },
            {
                id: 12,
                description: 'modified',
                name: 'UI',
                price: 2,
                total_In_Shelf: 3,
                total_In_Vault: 4,
                store_Id: 1
            },
            {
                id: 13,
                description: 'addedUI',
                name: 'addedUI',
                price: 1,
                total_In_Shelf: 2,
                total_In_Vault: 3,
                store_Id: 1
            },
            {
                id: 15,
                description: 'addForTest',
                name: 'addForTest',
                price: 6,
                total_In_Shelf: 66,
                total_In_Vault: 666,
                store_Id: 1
            }
        ],
        success: true,
        total_Elements: 6
    }),
    getAccessLoginResponse: [new LoginModel({
        role: 'admin',
        success: 'success'
    }),
    new LoginModel({
        role: 'user',
        success: 'success'
    })
]
}