import MediaItem from '@components/MediaObject/MediaItem';
import EmailIcon from '@mui/icons-material/Email';

const EmailMediaItem = () => {
  return (
    <MediaItem
      body='senshinkan@hakko-denshin-ryu.com'
      icon={EmailIcon}
      title='Email'
    />
  );
};

export default EmailMediaItem;
