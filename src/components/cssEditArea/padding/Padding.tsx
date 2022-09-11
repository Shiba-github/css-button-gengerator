import React, { useState } from 'react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Tooltip,
    Flex,
    Text,
    Button,
    Box,
} from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { setPadding } from '../../buttonView/buttonViewSlice'
import { AddIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { addCssButtonAnimeVariants } from '../animation/addCssButton'
import { rotateElementVariants } from '../animation/rotateElement'
import { EditPaddingTop } from './paddingTop/EditPaddingTop'
import { EditPaddingRight } from './paddingRight/EditPaddingRight'
import { EditPaddingBottom } from './paddingBottom/EditPaddingBottom'
import { EditPaddingLeft } from './paddingLeft/EditPaddingLeft'

export const Padding = () => {
    const dispatch = useAppDispatch()
    const padding = useAppSelector((state) => state.buttonView.padding)
    const displayPadding = useAppSelector((state) => state.cssCustomArea.displayPadding)
    const [showTooltip, setShowTooltip] = useState(false)
    const [isDisplayDetail, setIsDisplayDetail] = useState(false)
    const [allPadding, setAllPadding] = useState('')

    const onChangeValue = (v: number) => {
        setAllPadding(v.toString() + 'px')
        dispatch(setPadding(v.toString() + 'px'))
    }
    return (
        <>
            {displayPadding && (
                <Flex flexDirection={'column'} backgroundColor={'gray.50'} borderRadius={'1rem'} marginTop={'1rem'}>
                    <Flex
                        flexDirection={'row'}
                        alignItems={'center'}
                        marginTop={'0.5rem'}
                        marginBottom={'0.8rem'}
                        width={'50rem'}
                        borderColor={'gray.200'}
                    >
                        <Text
                            width={'6rem'}
                            color={'black'}
                            justifyContent={'start'}
                            fontSize={'1.2rem'}
                            marginLeft={'1rem'}
                            marginRight={'1rem'}
                        >
                            Padding
                        </Text>
                        <Slider
                            width={'40rem'}
                            id="slider"
                            defaultValue={0}
                            value={parseInt(allPadding.replace('px', ''))}
                            min={0}
                            max={100}
                            colorScheme="teal"
                            onChange={(v) => onChangeValue(v)}
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                        >
                            <SliderMark color={'black'} value={25} mt="1" ml="-2.5" fontSize="sm">
                                25px
                            </SliderMark>
                            <SliderMark color={'black'} value={50} mt="1" ml="-2.5" fontSize="sm">
                                50px
                            </SliderMark>
                            <SliderMark color={'black'} value={75} mt="1" ml="-2.5" fontSize="sm">
                                75px
                            </SliderMark>
                            <SliderTrack bg={'teal.50'}>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <Tooltip
                                hasArrow
                                bg="teal.500"
                                color="white"
                                placement="top"
                                isOpen={showTooltip}
                                label={`${padding}`}
                            >
                                <SliderThumb />
                            </Tooltip>
                        </Slider>
                        <Button
                            as={motion.button}
                            marginLeft={'2rem'}
                            marginRight={'1rem'}
                            width={'2rem'}
                            height={'2rem'}
                            variants={addCssButtonAnimeVariants}
                            initial={addCssButtonAnimeVariants.off}
                            whileHover={addCssButtonAnimeVariants.on}
                            animate={isDisplayDetail ? addCssButtonAnimeVariants.on : addCssButtonAnimeVariants.off}
                            onClick={() => setIsDisplayDetail(!isDisplayDetail)}
                        >
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                as={motion.div}
                                initial={rotateElementVariants.off}
                                animate={isDisplayDetail ? rotateElementVariants.on : rotateElementVariants.off}
                                whileHover={rotateElementVariants.on}
                            >
                                <AddIcon />
                            </Box>
                        </Button>
                    </Flex>
                    {isDisplayDetail && (
                        <Flex flexDirection={'column'}>
                            <EditPaddingTop />
                            <EditPaddingRight />
                            <EditPaddingBottom />
                            <EditPaddingLeft />
                        </Flex>
                    )}
                </Flex>
            )}
        </>
    )
}
