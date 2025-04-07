import { v4 as uuid } from 'uuid';
import { FormattedMessage as ReactFormattedMessage } from 'react-intl';

import type { IntlMessageID } from 'i18n/messages';

type FormatedMessageProps = {
  id: IntlMessageID;
  defaultMessage?: string;
  values?: Record<string, React.ReactNode>;
  children?: () => React.ReactNode;
};

const FormattedMessage = (props: FormatedMessageProps) => (
  <ReactFormattedMessage
    values={{
      span: (value: React.ReactNode) => <span key={uuid()}>{value}</span>,
      strong: (value: React.ReactNode) => <strong key={uuid()}>{value}</strong>,
    }}
    {...props}
  />
);

export default FormattedMessage;
