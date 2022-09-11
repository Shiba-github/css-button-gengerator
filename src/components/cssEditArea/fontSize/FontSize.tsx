import React, { useState } from 'react'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, Tooltip, Flex, Text } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { setFontSize } from '../../buttonView/buttonViewSlice'

export const FontSize = () => {
    const dispatch = useAppDispatch()
    const fontSize = useAppSelector((state) => state.buttonView.fontSize)
    const [showTooltip, setShowTooltip] = useState(false)
    const displayFontSize = useAppSelector((state) => state.cssCustomArea.displayFontSize)
    const onChangeValue = (v: number) => {
        dispatch(setFontSize(v.toString() + 'px'))
    }
    return (
        <>
            {displayFontSize ? (
                <Flex
                    flexDirection={'row'}
                    alignItems={'center'}
                    marginTop={'1rem'}
                    paddingTop={'0.5rem'}
                    paddingBottom={'0.8rem'}
                    width={'50rem'}
                    border={'1px'}
                    borderRadius={'1rem'}
                    borderColor={'gray.200'}
                    backgroundColor={'gray.50'}
                >
                    <Text width={'6rem'} color={'black'} fontSize={'1.2rem'} marginLeft={'1rem'} marginRight={'1rem'}>
                        Font Size
                    </Text>
                    <Slider
                        id="slider"
                        defaultValue={25}
                        value={parseInt(fontSize.replace('px', ''))}
                        min={0}
                        max={200}
                        colorScheme="teal"
                        onChange={(v) => onChangeValue(v)}
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    >
                        <SliderMark color={'black'} value={50} mt="1" ml="-2.5" fontSize="sm">
                            50px
                        </SliderMark>
                        <SliderMark color={'black'} value={100} mt="1" ml="-2.5" fontSize="sm">
                            100px
                        </SliderMark>
                        <SliderMark color={'black'} value={150} mt="1" ml="-2.5" fontSize="sm">
                            150px
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
                            label={`${fontSize}`}
                        >
                            <SliderThumb />
                        </Tooltip>
                    </Slider>
                </Flex>
            ) : (
                ''
            )}
        </>
    )
}
