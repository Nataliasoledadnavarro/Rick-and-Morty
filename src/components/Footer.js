import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';



const Footer = () => {
    return (
        <footer>
            <Box
                component="Footer"
                height="150px"
                sx={{ bgcolor: 'primary.main', color:"white", mt:12, display:"flex", justifyContent:"center", alignItems:"center"}}
                
            >
                <Typography
                    variant="h6"
                    
                >
                    Hecho por
                    <Link href="https://www.linkedin.com/in/nataliasoledadnavarro/" underline="hover"
                        sx={{color: 'secondary.main', ml:1 }}
                    >
                        Naty Navarro
                    </Link>
                </Typography>
            </Box>
        </footer>
    );
};

export default Footer;
