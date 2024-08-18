import PropTypes from "prop-types";
import { notFound } from "next/navigation";

const DetailPage = ({ params }: { params: ParamsType }) => {
  if (params.detail > 10) {
    return notFound();
  }

  return <div> {params.detail} DetailPage</div>;
};

interface ParamsType {
  detail: number;
}

DetailPage.propTypes = {
  params: PropTypes.object.isRequired,
};

export default DetailPage;
