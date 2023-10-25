import Modal, { ModalProps } from 'react-bootstrap/Modal'
import { StyledModal, StyledHeader } from './ModalOverview.styled'
import ReactPlayer from 'react-player'

const ModalOverview = ({ show, onHide, movie, trailerKey }: ModalProps) => {
  return (
    <StyledModal size="xl" show={show} onHide={onHide}>
      <StyledHeader>
        <Modal.Title>{movie ? movie.title : ''}</Modal.Title>
      </StyledHeader>
      <Modal.Body>
        {movie && (
          <>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailerKey}`}
              width={'100%'}
              height={'100%'}
              controls={true}
            />
            <div>{movie.overview}</div>
          </>
        )}
      </Modal.Body>
    </StyledModal>
  )
}

export default ModalOverview
