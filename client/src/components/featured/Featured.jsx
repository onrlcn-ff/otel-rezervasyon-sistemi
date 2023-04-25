import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cdn2.enuygun.com/media/lib/1290x430/uploads/image/ankara-40843.webp"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ankara</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://static.nationalgeographic.co.uk/files/styles/image_3200/public/ngt_we_bistanbul_gettyimages-668990458_hr.jpg?w=1600&h=900"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>İstanbul</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cdnp.flypgs.com/files/Sehirler-long-tail/izmir/izmir-gezilecek-yerler-saat-kulesi.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>İzmir</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cdn.antalya.com.tr//Uploaded/Content/e415e25e-1587-4857-bd69-ebea561604fa.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Türkiye</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
