import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export function Copyright() {
  return (
    <Typography variant='body2' color='textPrimary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='#'>
        Reminder App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
