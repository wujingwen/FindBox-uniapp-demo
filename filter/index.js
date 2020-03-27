import NumberFilters from './number-filters'
import StringFilters from './string-filters'
import TimeFilters from './time-filter'

export default {
  ...NumberFilters,
  ...StringFilters,
  ...TimeFilters
}