import type { IntlMessageID } from 'i18n/messages';
import { FormattedMessage as ReactFormattedMessage } from 'react-intl';

type FormatedMessageProps = {
  id: IntlMessageID;
  defaultMessage?: string;
  values?: Record<string, React.ReactNode>;
  children?: () => React.ReactNode;
};

const FormattedMessage = (props: FormatedMessageProps) => (
  <ReactFormattedMessage
    values={{
      span: (value: React.ReactNode) => <span>{value}</span>,
      strong: (value: React.ReactNode) => <strong>{value}</strong>,
    }}
    {...props}
  />
);

export default FormattedMessage;
