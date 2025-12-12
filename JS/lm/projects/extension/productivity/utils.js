class StorageService{
    static async save(key,value){
        await chrome.storage.local.set({[key]: value})
    }
    static async get(key){
        const result = await chrome.storage.local.get([key]);
        return result[key] ?? null;
    }

}