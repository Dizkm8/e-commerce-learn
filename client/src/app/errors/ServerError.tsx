import { Container, Divider, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function ServerError() {
    const { state } = useLocation();

    return (
        <Container component={Paper}>
            {state?.error ? (
                <>
                    <Typography gutterBottom variant="h3" color="error">
                        {state.error.title}
                    </Typography>
                    <Divider />
                    <Typography gutterBottom variant="body1">
                        {state.error.detail || 'Internal server error'}
                    </Typography>
                </>
            ) : (
                <Typography variant='h3' color='error' gutterBottom>Server Error</Typography>
            )}
        </Container>
    );
}