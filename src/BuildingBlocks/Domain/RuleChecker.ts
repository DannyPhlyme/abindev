import { BusinessRuleValidationError } from './BusinessRuleValidationError';
import { IBusinessRule } from './IBusinessRule';

export abstract class RuleChecker {
  static CheckRule(rule: IBusinessRule): void {
    if (rule.isBroken()) {
      throw new BusinessRuleValidationError(rule.constructor.name, rule.message);
    }
  }
}
