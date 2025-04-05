import MediaItem from '@components/MediaObject/MediaItem';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const AddressMediaItem = () => {
  return (
    <MediaItem
      body='Aleea Paradisul Verde 2 Corbeanca'
      icon={LocationOnIcon}
      title='Address'
    />
  );
};

export default AddressMediaItem;
