import WepSerivceApi from '../../_Service/Setting';

const Map = () => {
    const { data } = WepSerivceApi()
    const map = data?.contact_us?.map

    return (
        <>
            <div className="google-map-code">
                <div dangerouslySetInnerHTML={{ __html: map }} />
            </div>
        </>
    )
}

export default Map