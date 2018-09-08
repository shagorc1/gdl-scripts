namespace Validacion {
  let numberRegexp = /^[0-9]+$/;

  export class ZipCodeValidation implements StringValidation {
    isAceptable(s: string): boolean {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}