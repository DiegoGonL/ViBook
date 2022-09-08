import React from 'react';
import {AspectRatio, Box, Card, CardOverflow, Typography, IconButton} from "@mui/joy";
import {Delete, Edit} from "@mui/icons-material";
import Link from "next/link";

function VisorMultimediaCard(props) {
    return (
        <Card variant="outlined" sx={{width:940}}>
            <CardOverflow>
                <AspectRatio ratio="2">
                    <video
                        autoPlay
                        loop
                        muted
                        poster="https://assets.codepen.io/6093409/river.jpg"
                    >
                        <source
                            src="https://assets.codepen.io/6093409/river.mp4"
                            type="video/mp4"
                        />
                    </video>
                </AspectRatio>
                <Box sx={{
                    position: 'absolute',
                    zIndex: 2,
                    right: '1rem',
                    bottom: 0,
                    transform: 'translateY(50%)',
                }}>
                    <IconButton
                        aria-label="Delete multimedia button"
                        size="md"
                        variant="solid"
                        color="primary"
                        sx={{borderRadius: '50%', mr: '1px'}}
                    >
                        <Edit/>
                    </IconButton>
                    <IconButton
                        aria-label="Delete multimedia button"
                        size="md"
                        variant="solid"
                        color="danger"
                        sx={{borderRadius: '50%', ml: '1px'}}
                    >
                        <Delete/>
                    </IconButton>
                </Box>
            </CardOverflow>
            <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                <Link href="components/visor/VisorMultimediaCard#multiple-actions" overlay underline="none">
                    Yosemite National Park
                </Link>
            </Typography>
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                <Link href="components/visor/VisorMultimediaCard#multiple-actions">California</Link>
            </Typography>
            <CardOverflow
                variant="soft"
                sx={{
                    display: 'flex',
                    gap: 1.5,
                    py: 1.5,
                    px: 'var(--Card-padding)',
                    borderTop: '1px solid',
                    borderColor: 'neutral.outlinedBorder',
                    bgcolor: 'background.level1',
                }}
            >
                <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                    6.3k views
                </Typography>
                <Box sx={{ width: 2, bgcolor: 'divider' }} />
                <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                    1 hour ago
                </Typography>
            </CardOverflow>
        </Card>
    );
}

export default VisorMultimediaCard;