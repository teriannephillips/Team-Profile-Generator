
const Employee = require('../lib/employee');
describe('Employee', () => {
    let employee;
  
    beforeEach(() => {
      employee = new Employee("Terianne", 1001, "terianne@acme.com");
    });
  
    it('should have a name, id, and email property', () => {
      expect(employee.hasOwnProperty('name')).toBe(true);
      expect(employee.hasOwnProperty('id')).toBe(true);
      expect(employee.hasOwnProperty('email')).toBe(true);
    });
  
    it('should have correct name, id, and email values', () => {
      expect(employee.getName()).toEqual("Terianne");
      expect(employee.getId()).toEqual(1001);
      expect(employee.getEmail()).toEqual("terianne@acme.com");
    });
    it('should return "Employee" as the role', () => {
        expect(employee.getRole()).toEqual("Employee");
      });
  });
  
  
  
  
  