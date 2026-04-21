import { Platform, Text, View } from 'react-native';

const PRIMARY_COLOR = '#1A1A1A';      // Deep ink black
const BG_COLOR = '#F5F0E8';           // Aged parchment
const BORDER_COLOR = '#8B7355';       // Warm sepia

const AppHeader = ({ title, subtitle }) => {
    return (
        <View
            style={{
                width: '100%',
                paddingTop: Platform.OS === 'ios' ? 60 : 40,
                paddingBottom: 28,
                backgroundColor: BG_COLOR,
                borderBottomWidth: 3,
                borderBottomColor: PRIMARY_COLOR,
                alignItems: 'center',
            }}
        >
            {/* Top decorative rule */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '80%',
                    marginBottom: 14,
                }}
            >
                <View style={{ flex: 1, height: 1, backgroundColor: BORDER_COLOR }} />
                <Text
                    style={{
                        marginHorizontal: 10,
                        fontSize: 10,
                        color: BORDER_COLOR,
                        fontFamily: 'serif',
                        letterSpacing: 3,
                    }}
                >
                    ✦
                </Text>
                <View style={{ flex: 1, height: 1, backgroundColor: BORDER_COLOR }} />
            </View>

            {/* Brand name — always shown */}
            <Text
                style={{
                    fontSize: 34,
                    fontWeight: '900',
                    letterSpacing: 8,
                    color: PRIMARY_COLOR,
                    fontFamily: 'serif',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                }}
            >
                MACHIAVILLI
            </Text>

            {/* Tagline — always shown */}
            <Text
                style={{
                    marginTop: 6,
                    fontSize: 12,
                    color: BORDER_COLOR,
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    letterSpacing: 2,
                    textAlign: 'center',
                }}
            >
                " clothes to wear "
            </Text>

            {/* Bottom decorative rule */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '80%',
                    marginTop: 14,
                }}
            >
                <View style={{ flex: 1, height: 1, backgroundColor: BORDER_COLOR }} />
                <Text
                    style={{
                        marginHorizontal: 10,
                        fontSize: 10,
                        color: BORDER_COLOR,
                        fontFamily: 'serif',
                        letterSpacing: 3,
                    }}
                >
                    ✦
                </Text>
                <View style={{ flex: 1, height: 1, backgroundColor: BORDER_COLOR }} />
            </View>

            {/* Dynamic title & subtitle (passed as props) */}
            {title ? (
                <Text
                    style={{
                        marginTop: 16,
                        fontSize: 18,
                        fontWeight: '700',
                        letterSpacing: 1.5,
                        color: PRIMARY_COLOR,
                        fontFamily: 'serif',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                    }}
                >
                    {title}
                </Text>
            ) : null}
            {subtitle ? (
                <Text
                    style={{
                        marginTop: 5,
                        fontSize: 13,
                        color: '#5C5144',
                        fontFamily: 'serif',
                        fontStyle: 'italic',
                        letterSpacing: 0.4,
                        textAlign: 'center',
                    }}
                >
                    {subtitle}
                </Text>
            ) : null}
        </View>
    );
};

export default AppHeader;