
export abstract class TutorialDao{

    abstract get(id);

    abstract getAll();
    
    abstract create(data); 
    
    abstract update(id, data);
    
    abstract delete(id);
    
    abstract deleteAll();
    
    abstract findByTitle(title);
      

}