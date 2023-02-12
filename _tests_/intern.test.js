
const Intern = require('../lib/intern');
describe('Intern', () => {
    let intern;
  
    beforeEach(() => {
      intern = new Intern("Terianne", 1001, "terianne@acme.com", "Carleton");
    });
  
    it('should have a name, id, email , and school property ', () => {
      expect(intern.hasOwnProperty('name')).toBe(true);
      expect(intern.hasOwnProperty('id')).toBe(true);
      expect(intern.hasOwnProperty('email')).toBe(true);
      expect(intern.hasOwnProperty('school')).toBe(true);
    });
  
    it('should have correct name, id, email and school values', () => {
      expect(intern.getName()).toEqual("Terianne");
      expect(intern.getId()).toEqual(1001);
      expect(intern.getEmail()).toEqual("terianne@acme.com");
      expect(intern.getSchool()).toEqual("Carleton");
    });
    it('should return "Intern" as the role', () => {
      expect(intern.getRole()).toEqual("Intern");
    });
  });
  
  
  
  
  