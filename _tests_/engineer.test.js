
const Engineer = require('../lib/engineer');
describe('Engineer', () => {
    let engineer;
  
    beforeEach(() => {
      engineer = new Engineer("Terianne", 1001, "terianne@acme.com", "teriannephillips");
    });
  
    it('should have a name, id, email , and github property', () => {
      expect(engineer.hasOwnProperty('name')).toBe(true);
      expect(engineer.hasOwnProperty('id')).toBe(true);
      expect(engineer.hasOwnProperty('email')).toBe(true);
      expect(engineer.hasOwnProperty('github')).toBe(true);
    });
  
    it('should have correct name, id, email and github values', () => {
      expect(engineer.getName()).toEqual("Terianne");
      expect(engineer.getId()).toEqual(1001);
      expect(engineer.getEmail()).toEqual("terianne@acme.com");
      expect(engineer.getGithub()).toEqual("teriannephillips");
    });
    it('should return "Engineer" as the role', () => {
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
  
  
  
  
  