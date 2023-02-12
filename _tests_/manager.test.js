
const Manager = require('../lib/manager');
describe('Manager', () => {
    let manager;
  
    beforeEach(() => {
      manager = new Manager("Terianne", 1001, "terianne@acme.com", "613-612-1234");
    });
  
    it('should have a name, id, email , and office number property ', () => {
      expect(manager.hasOwnProperty('name')).toBe(true);
      expect(manager.hasOwnProperty('id')).toBe(true);
      expect(manager.hasOwnProperty('email')).toBe(true);
      expect(manager.hasOwnProperty('officeNum')).toBe(true);
    });
  
    it('should have correct name, id, email values and office number values', () => {
      expect(manager.getName()).toEqual("Terianne");
      expect(manager.getId()).toEqual(1001);
      expect(manager.getEmail()).toEqual("terianne@acme.com");
    });
    it('should return "Manager" as the role', () => {
      expect(manager.getRole()).toEqual("Manager");
    });
  });
  
  
  
  
  